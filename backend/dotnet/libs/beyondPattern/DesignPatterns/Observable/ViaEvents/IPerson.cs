using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OberserverViaEvent.DesignPatterns.ViaEvents;

namespace OberserverViaEvent.DesignPatterns.Observable.ViaEvents
{
    public interface IPerson
    {
        event EventHandler<IsIllEventArgs> IsIll;
         void CatchACold();
    }
}