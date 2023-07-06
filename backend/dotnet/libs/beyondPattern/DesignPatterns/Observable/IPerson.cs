using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OberserverViaEvent.DesignPatterns.Observable
{
    public interface IPerson
    {
        event EventHandler<IsIllEventArgs> IsIll;
         void CatchACold();
    }
}