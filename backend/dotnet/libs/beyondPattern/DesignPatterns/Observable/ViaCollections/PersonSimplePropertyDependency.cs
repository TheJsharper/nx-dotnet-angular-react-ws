using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections
{
    public class PersonSimplePropertyDependency:INotifyPropertyChanged
    {
        private int age;

        public int Age
        {
            get => age;
            set
            {

                var oldCanVote = CanVote;

                if (value == age) return;
                age = value;
                OnPropertyChanged();

                if(oldCanVote != CanVote)                
                    OnPropertyChanged(nameof(CanVote));               

            }
        }

        public bool CanVote => Age >= 16;

        public event PropertyChangedEventHandler? PropertyChanged;

        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName="")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
