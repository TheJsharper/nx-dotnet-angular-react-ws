using Backend.Dotnet.Libs.SensorSem.Sensors;
using System.Diagnostics;

namespace Backend.Dotnet.Libs.SensorSem.Test.Sensors
{
    public class SensorTest
    {
        [Fact]
        public void FullPlaceSensorIfThePropertyChangedRaiseTest()
        {
            var sensor = new Sensor();

            bool value = true;

            Assert.PropertyChanged(sensor, "EmptyPlaceSensor", () => sensor.EmptyPlaceSensor = value);

            Assert.True(sensor.EmptyPlaceSensor);
        }

        [Fact]
        public void EmptyPlaceSensorIfThePropertyChangedRaiseTest()
        {
            var sensor = new Sensor();

            var value = true;

            Assert.PropertyChanged(sensor, "FullPlaceSensor", () => sensor.FullPlaceSensor = value);

            Assert.True(sensor.FullPlaceSensor);
        }


        [Fact]
        public async Task StartAndStopTimerTest()
        {
            var sensor = new Sensor();
            await sensor.StartTimer(1000, 0, async (state) =>
            {
                if (state != null)
                {

                    Stopwatch stopwatch = (Stopwatch)state;

                    var elapsed = stopwatch.ElapsedMilliseconds;

                    Console.WriteLine($"====> current elapsed {elapsed}");
                    if (elapsed <= 50000)
                    {
                        stopwatch.Stop();

                        await sensor.KillTimer();

                        Console.WriteLine($"====> StopWatch was stopped and Timmer was disposed {elapsed}");
                    }
                }
            });



        }
    }
}
