using System.ComponentModel;
using System.Linq.Expressions;
using System.Runtime.CompilerServices;

namespace Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections
{

    public class PropertyNotificationSupport : INotifyPropertyChanged
    {
        protected readonly Dictionary<string, HashSet<string>> affectedBy = new Dictionary<string, HashSet<string>>();

        public event PropertyChangedEventHandler? PropertyChanged;

        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
            foreach (var affected in affectedBy.Keys)
            {
                if (affectedBy[affected].Contains(propertyName))
                    OnPropertyChanged(affected);

            }
        }
    }
    public class PersonAdvancePropertyDependency : PropertyNotificationSupport
    {

        private int age;

        public int Age
        {
            get => age;
            set
            {

                if (value == age) return;
                age = value;
                OnPropertyChanged();

            }
        }


        private readonly Func<bool> canVote;
        public bool CanVote => canVote();

        public bool Citizen { get; set; }

        private readonly Func<bool> isNotEmptyFirstName;

        public bool IsNotEmptyFirstName => isNotEmptyFirstName();

        private string firstName = string.Empty;

        public string FirstName
        {
            get => firstName;
            set
            {

                if (firstName.Equals(value)) return;
                firstName = value;
                OnPropertyChanged();

            }
        }



        private string lastName = string.Empty;
        public string LastName
        {
            get => lastName;
            set
            {
                if (lastName.Equals(value)) return;
                lastName = value;
                OnPropertyChanged();
            }
        }

        public PersonAdvancePropertyDependency()
        {
            canVote = Property(nameof(CanVote), () => Age >= 16 && Citizen);

            isNotEmptyFirstName = Property(nameof(IsNotEmptyFirstName), () => FirstName != "" && FirstName!.Length >= 3);

        }

        private Func<T> Property<T>(string name, Expression<Func<T>> expr)
        {
            Console.WriteLine($"Creating computed property for expression {expr}");

            var visitor = new MemberAccessVisitor(GetType());

            visitor.Visit(expr);

            if (visitor.propertyNames.Any())
            {
                if (!affectedBy.ContainsKey(name))
                {
                    affectedBy.Add(name, new HashSet<string>());

                }
                foreach (var propName in visitor.propertyNames)
                {
                    if (propName != name)
                        affectedBy[name].Add(propName);
                }
            }

            return expr.Compile();
        }





        private class MemberAccessVisitor : ExpressionVisitor
        {
            private readonly Type declaringType;
            public readonly IList<string> propertyNames = new List<string>();

            public MemberAccessVisitor(Type declaringType)
            {
                this.declaringType = declaringType;
            }


            public override Expression? Visit(Expression? expr)
            {
                if (expr != null && expr.NodeType == ExpressionType.MemberAccess)
                {
                    var memberExpr = (MemberExpression)expr;
                    if (memberExpr.Member.DeclaringType == declaringType)
                    {
                        propertyNames.Add(memberExpr.Member.Name);
                    }
                }
                return base.Visit(expr);
            }
        }
    }


}
