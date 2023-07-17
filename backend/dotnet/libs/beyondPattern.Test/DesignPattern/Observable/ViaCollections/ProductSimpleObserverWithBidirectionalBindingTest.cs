using Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections;
using System.Net.Http.Headers;

namespace Backend.Dotnet.Libs.Beyond.Pattern.Test.DesignPattern.Observable.ViaCollections
{
    public class ProductSimpleObserverWithBidirectionalBindingTest
    {

        [Fact]
        public void SimpleObserverWithBidirectionalBindingTest()
        {

            var product = new ProductSimpleObserverWithBidirectionalBinding() { Name = "Product Testing...." };

            var window = new WindowSimpleObserverWithBidirectionalBinding { ProductName = "Winodw Testing..." };

            var value = "Testing bidirectional event with theis xUnit testing ";

            using var binding = new BidirectionalBinding(
                product,
                () => product.Name,
                window,
                () => window.ProductName);

            product.Name = value;

            window.ProductName = "Really smart book";

            Console.WriteLine(product);

            Console.WriteLine(window);
        }
    }
}
