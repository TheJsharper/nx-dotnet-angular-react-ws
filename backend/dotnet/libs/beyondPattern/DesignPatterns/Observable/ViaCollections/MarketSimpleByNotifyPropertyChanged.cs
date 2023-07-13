using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections
{
    public class MarketSimpleByNotifyPropertyChanged:INotifyPropertyChanged
    {
        private float valitility;

        public float Valitility { get => valitility; set {
                if (value.Equals(valitility)) return;
                valitility = value;
                OnPropertyChanged(nameof(Valitility));
            } }

        public event PropertyChangedEventHandler? PropertyChanged;


        [NotifyPropertyChangedInvocator]
        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName="")
        {
            if(!propertyName.Equals(""))
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

    }

}
