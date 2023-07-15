using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections
{
    public class ProductSimpleOberverBidirectionalWithPossibleinfiniteRecursionLoop : INotifyPropertyChanged
    {
        private string name = string.Empty;
        public string Name
        {
            get => name;
            set
            {
                if (value == name) return; // With this condition you avoid infinite Recursion event loop, see testing
                name = value;
                OnProperChanged();
            }
        }

        public event PropertyChangedEventHandler? PropertyChanged;

        protected virtual void OnProperChanged([CallerMemberName] string propertyName = "")
        {
            if (!propertyName.Equals(""))
            {

                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
            }
        }

        public override string ToString()
        {
            return $"Product {Name}";
        }
    }


    public class WindowSimpleOberverBidirectionalWithPossibleinfiniteRecursionLoop : INotifyPropertyChanged
    {
        private string productName = string.Empty;

        public string ProductName
        {
            get => productName; 
            set
            {
                if (value == productName) return; // With this condition you avoid infinite Recursion event loop, see testing
                productName = value;
            }
        }
        public event PropertyChangedEventHandler? PropertyChanged;

        protected virtual void OnProperChanged([CallerMemberName] string propertyName = "")
        {
            if (!propertyName.Equals(""))
            {

                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
            }
        }

        public override string ToString()
        {
            return $"Window {ProductName}";
        }
    }
}
