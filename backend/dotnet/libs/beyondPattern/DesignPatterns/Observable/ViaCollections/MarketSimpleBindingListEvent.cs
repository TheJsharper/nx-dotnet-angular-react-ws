using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections
{
    public class MarketSimpleBindingListEvent
    {

        public BindingList<float> ?Prices;

        public MarketSimpleBindingListEvent()
        {
            Prices = new BindingList<float>();
        }

        public void AddPrice(float price)
        {
            Prices?.Add(price);

        }

    }
}
