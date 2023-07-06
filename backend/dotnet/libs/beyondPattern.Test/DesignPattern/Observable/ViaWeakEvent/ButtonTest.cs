using beyondPattern.DesignPatterns.Observable.ViaWeakEvent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Dotnet.Libs.Beyond.Pattern.Test.DesignPattern.Observable.ViaWeakEvent
{
    public class ButtonTest
    {

        [Fact]

        public void ButtonWeakTestAfterCGCollection()
        {
            var button = new Button();

            var window = new Window(button);

            WeakReference weakReference = new WeakReference(window);
            
            button.Fire();
            
            Console.WriteLine("----> Setting windo to null");
            
            window = null;

            
            Console.WriteLine("------> Starting GC");
            
            GC.Collect();
            
            GC.WaitForPendingFinalizers();
            GC.Collect();
            
            Console.WriteLine("------> GC is Done" );

            
            Assert.True(weakReference.IsAlive);
            
            Console.WriteLine($"Is the Window alive after GC{weakReference.IsAlive} ");

        }
    }
}
