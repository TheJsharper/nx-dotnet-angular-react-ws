using Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections;
using System.Net.Http.Headers;

namespace Backend.Dotnet.Libs.Beyond.Pattern.Test.DesignPattern.Observable.ViaCollections
{
    public class ProductSimpleObserverWithBidirectionalBindingTest
    {

        [Fact]
        public void Test()
        {

            var product = new ProductSimpleObserverWithBidirectionalBinding() { Name = "Product Testing...." };

            var window = new WindowSimpleObserverWithBidirectionalBinding { ProductName = "Winodw Testing..." };

            var value = "Testing bidirectional event with theis xUnit testing ";

            /*
            product.PropertyChanged += (sender, evnetArgs) =>
            {
                if (evnetArgs.PropertyName == "Name")
                {
                    Console.WriteLine("Name is changed in Product");

                    window.ProductName = product.Name;

                    Assert.Equal(product.Name, value);
                }
            };

            window.PropertyChanged += (sender, evnetArgs) =>
            {
                if (evnetArgs.PropertyName == "ProductName")
                {
                    Console.WriteLine("Name is changed in Window");

                    product.Name = window.ProductName;

                    Assert.Equal(window.ProductName, value);

                    Assert.Equal(window.ProductName, product.Name);
                }
            };

            */

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
