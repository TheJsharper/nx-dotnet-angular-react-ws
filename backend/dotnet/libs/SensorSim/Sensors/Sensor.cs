using System.Diagnostics;

namespace Backend.Dotnet.Libs.SensorSem.Sensors
{
    public class Sensor : SensorPropertyNotificationSupportBase, ISensor
    {

        private bool emptyPlaceSensor;

        private bool fullPlaceSensor;

        private readonly Stopwatch? stopwatch = null;

        private Timer? timer = null;




        public bool EmptyPlaceSensor
        {
            get => emptyPlaceSensor;

            set
            {
                if (value == emptyPlaceSensor) return;
                emptyPlaceSensor = value;
                OnPlaceSensorChanged();


            }
        }
        public bool FullPlaceSensor
        {
            get => fullPlaceSensor;
            set
            {
                if (value == fullPlaceSensor) return;
                fullPlaceSensor = value;
                OnPlaceSensorChanged();
            }
        }


        public Stopwatch? Stopwatch => stopwatch;
        public Sensor()
        {
            stopwatch = new Stopwatch();
        }

        public async Task KillTimer(long id)
        {

            if (this.timer != null)
                await Task.Run(async () => await this.timer.DisposeAsync());
        }

        public async Task StartTimer(long delay, long period, TimerCallback callback)
        {


            await Task.Run(() => this.timer = new(callback, null, delay, period));

        }
    }
}
