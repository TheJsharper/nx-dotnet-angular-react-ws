using Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections;
using System.ComponentModel;

namespace Backend.Dotnet.Libs.Beyond.Pattern.Test.DesignPattern.Observable.ViaCollections
{
    public class MarketSimpleBindingListEventTest
    {


        [Fact]
        private void MarketSimpleBindingListChangedValueTest()
        {
            var market = new MarketSimpleBindingListEvent();

            var value = 123.40F;

            if (market.Prices != null)
                market.Prices.ListChanged += (sender, eventArgs) =>
                {
                    if (eventArgs.ListChangedType == ListChangedType.ItemAdded && sender != null)
                    {
                        float newAddedPrice = ((BindingList<float>)sender)[eventArgs.NewIndex];
                        Console.WriteLine($"Binding list got a price of {newAddedPrice}");
                        Assert.Equal(value, newAddedPrice);


                    }
                };
            market.AddPrice(value);
        }



    }
}
