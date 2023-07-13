using Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections;

namespace Backend.Dotnet.Libs.Beyond.Pattern.Test.DesignPattern.Observable.ViaCollections
{
    public class MarketSimpleListEventHandlerTest
    {

        [Fact]
        public void MarketVolatilityRaiseTest()
        {
            var market = new MarketSimpleListEventHandler();

            var value = 255f;

            var result = Assert.Raises<float>(
                    handler => market.PriceAdded += handler,
                    handler => market.PriceAdded -= handler,
                    () => market.AddPrice(value)
                );

            var foundValue = market.Prices.Find(v => v == value);

            Assert.Equal(value, foundValue);
        }

        [Fact]
        public void MarketVolatilityValueTest()
        {
            var market = new MarketSimpleListEventHandler();

            var value = 255f;

            market.PriceAdded += (sender, newValue) =>
            {
                Console.WriteLine($" We got a price of {newValue}");
                Assert.Equal(value, newValue);
            };

            market.AddPrice(value);

            var foundValue = market.Prices.Find(v => v == value);

            Assert.Equal(value, foundValue);
        }
    }
}
