using Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections;
using Castle.Components.DictionaryAdapter;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Dotnet.Libs.Beyond.Pattern.Test.DesignPattern.Observable.ViaCollections
{
    public class MarketSimpleBindingListEventTest
    {


        [Fact]
        private void MarketSimpleBindingListChangedValueTest()
        {
            var market = new MarketSimpleBindingListEvent();
            var value = 123.40F;
            market.Prices.ListChanged += (sender, eventArgs) =>
            {
                if(eventArgs.ListChangedType == ListChangedType.ItemAdded && sender!= null)
                {
                    float newAddedPrice = ((System.ComponentModel.BindingList<float>)sender)[eventArgs.NewIndex];
                    Console.WriteLine($"Binding list got a price of {newAddedPrice}");
                    Assert.Equal(value, newAddedPrice);


                }
            };

            market.AddPrice(value);
        }


        
    }
}
