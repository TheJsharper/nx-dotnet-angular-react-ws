using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaInterfaces
{
   public class Event
    {
    }
    public class FallslllEvent: Event {
        public string ?Address;
    }
    public class Person : IObservable<Event>
    {
        private readonly HashSet<Subscription> subscriptions = new HashSet<Subscription>();
        public IDisposable Subscribe(IObserver<Event> observer)
        {
            var subscription = new Subscription(this, observer);
            subscriptions.Add(subscription);

            return subscription;
        }

        public void FallsIll()
        {
            foreach(var s in subscriptions)
            {
                s.Observer.OnNext(new FallslllEvent
                {
                    Address = "12345, Road London AL "
                });
            }
        }
        private class Subscription : IDisposable
        {
            private readonly Person Person;

            public readonly IObserver<Event> Observer;

            public Subscription(Person p, IObserver<Event> observer)
            {
                Person = p;
                Observer = observer; 
                
            }


            public void Dispose()
            {
                Person.subscriptions.Remove(this);
            }
        }
    }


}
