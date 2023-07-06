using OberserverViaEvent.DesignPatterns;
using Moq;
using OberserverViaEvent.DesignPatterns.Observable;

namespace Backend.Dotnet.Libs.OberserverViaEvent.Test;

public class UnitTest1
{
    readonly Mock<IPerson> mock = new Mock<IPerson>();
    [Fact]
    public void Test1()
    {
        mock
        .Setup((p)=> p.CatchACold())
        //.Setup((p) => p.CatchACold())
        //.Raises((p)=> p.IsIll+=(o, e)=>{},new IsIllEventArgs{Address="----->testing roading 123<-----"}, this, true)
        .Raises((p)=> p.IsIll+= null, new IsIllEventArgs{Address="----->testing roading 123<-----"}).Verifiable();
        //.Verifiable();
        var p = new Person();
    p.CatchACold();
      mock.Verify((p)=> p.CatchACold(), Times.Once());
        
        
    }


}