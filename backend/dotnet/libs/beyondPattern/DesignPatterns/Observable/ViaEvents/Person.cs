
using OberserverViaEvent.DesignPatterns.Observable.ViaEvents;

namespace OberserverViaEvent.DesignPatterns.ViaEvents
{
    public class IsIllEventArgs
    {
        public string Address = "";
    }

    public class Person:IPerson
    {
        public void CatchACold()
        {
            this.IsIll?.Invoke(this, new IsIllEventArgs { Address = "123 London Road" });
        
        }
        public event EventHandler<IsIllEventArgs> ?IsIll;
    }
}