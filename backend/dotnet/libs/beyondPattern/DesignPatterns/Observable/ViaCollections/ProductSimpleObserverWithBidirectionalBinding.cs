using System.ComponentModel;
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
}
