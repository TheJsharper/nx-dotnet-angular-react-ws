using System.ComponentModel;
using System.Linq.Expressions;
using System.Reflection;
using System.Runtime.CompilerServices;

namespace Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections
{
    public class ProductSimpleObserverWithBidirectionalBinding : INotifyPropertyChanged
    {
        private string name = string.Empty;
        public string Name
        {
            get => name;
            set
            {
                name = value;
                OnPropertyChanged();
            }
        }

        public event PropertyChangedEventHandler? PropertyChanged;

        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));

        }
        public override string ToString()
        {
            return $"Product {name}";
        }
    }

    public class WindowSimpleObserverWithBidirectionalBinding : INotifyPropertyChanged
    {
        private string productName = string.Empty;

        public string ProductName
        {
            get => productName;
            set
            {
                productName = value;
                OnPropertyChanged();
            }
        }
        public event PropertyChangedEventHandler? PropertyChanged;

        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));

        }
    }

    public sealed class BidirectionalBinding : IDisposable
    {
        private bool disposed = false;

        public BidirectionalBinding(
            INotifyPropertyChanged first,
            Expression<Func<object>> firstProperty,
            INotifyPropertyChanged second,
            Expression<Func<object>> secondProperty)
        {

            if (firstProperty.Body is MemberExpression firstExpr
                && secondProperty.Body is MemberExpression secondExpr)
            {
                if (firstExpr.Member is PropertyInfo firstProp &&
                    secondExpr.Member is PropertyInfo secondProp)
                {
                    first.PropertyChanged += (sender, args) =>
                    {
                        if (!disposed)
                            secondProp.SetValue(second, firstProp.GetValue(first));
                    };
                    second.PropertyChanged += (sender, args) =>
                    {
                        if (!disposed)
                            firstProp.SetValue(first, secondProp.GetValue(second));
                    };

                }
            }
        }
        public void Dispose()
        {
            this.disposed = true;
        }
    }
}
