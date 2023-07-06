using Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Dotnet.Libs.Beyond.Pattern.Test.DesignPattern.Observable.ViaInterfaces
{
    public class EventTest
    {

        [Fact]

        public void test()
        {

            new SimpleObserverTest();

        }
    }

    public class SimpleObserverTest : IObserver<Event>
    {

        public SimpleObserverTest()
        {
            var person = new Person();
            var sub = person.Subscribe(this);
            person.FallsIll();
            
        }
        public void OnCompleted()
        {
            
        }

        public void OnError(Exception error)
        {
            
        }

        public void OnNext(Event value)
        {
           if(value is FallslllEvent args)
            {
                Console.WriteLine($"========= A Doctor is required at {args.Address}======");
            }
        }
    }
}
