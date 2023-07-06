using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OberserverViaEvent.DesignPatterns.Observable;

namespace OberserverViaEvent.DesignPatterns
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