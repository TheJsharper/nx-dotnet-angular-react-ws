// See https://aka.ms/new-console-template for more information
using Backend.Dotnet.Libs.SensorSem.Sensors;
using System.Diagnostics;

Console.WriteLine("Hello, World!");

var sensor = new Sensor();

    DateTime now = DateTime.Now;
await sensor.StartTimer(100, 1000, async(state) =>
{
    Stopwatch stopwatch = (Stopwatch)state;

    
    Console.WriteLine($"===>x{"HYEE"} =>{stopwatch.ElapsedMilliseconds} ===> {stopwatch.IsRunning} ===>{now.Second}" );

    if(stopwatch.ElapsedMilliseconds > 60000)
    {
        stopwatch.Stop();
       await sensor.KillTimer(100);
    }
    
});


Console.WriteLine("END");
Console.ReadKey();