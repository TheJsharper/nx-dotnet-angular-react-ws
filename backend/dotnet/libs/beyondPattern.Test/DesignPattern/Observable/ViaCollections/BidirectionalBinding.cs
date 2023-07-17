using System.ComponentModel;
using System.Linq.Expressions;
using System.Reflection;

namespace Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections
{
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
                        {

                            object? firstValue = firstProp.GetValue(first);

                            secondProp.SetValue(second, firstValue);

                            object? secondValue = secondProp.GetValue(second);

                            Assert.Equal(firstValue, secondValue);
                        }
                    };
                    second.PropertyChanged += (sender, args) =>
                    {
                        if (!disposed)
                        {
                            object? secondValue = secondProp.GetValue(second);
                            
                            firstProp.SetValue(first, secondValue);

                            object? firstValue = firstProp.GetValue(first);
                            
                            Assert.Equal(firstValue, secondValue);
                        }
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
