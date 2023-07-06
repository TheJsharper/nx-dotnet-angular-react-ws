using OberserverViaEvent.DesignPatterns;
using Moq;
using OberserverViaEvent.DesignPatterns.Observable;
using OberserverViaEvent.DesignPatterns.ViaEvents;
using OberserverViaEvent.DesignPatterns.Observable.ViaEvents;

namespace Backend.Dotnet.Libs.Beyond.Pattern.Test.DesignPattern.Observable.ViaEvents;

public class PersonTest
{
    readonly Mock<IPerson> mock = new Mock<IPerson>();
    [Fact]
    public void PersonIfIllEventTest()
    {

        mock
        .Setup((p) => p.CatchACold())
        .Raises((p) => p.IsIll += null, new IsIllEventArgs { Address = "----->testing roading 123<-----" }).Verifiable();

        var p = new Person();
        p.IsIll += (sender, args) =>
        {
            Console.WriteLine($"in case this person become ill {args.Address}");
        };
        p.CatchACold();

        mock.Setup(p => p.CatchACold()).Verifiable();



    }


}