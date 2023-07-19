using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Dotnet.Libs.SensorSem.Sensors
{
    public interface ISensor
    {
        public bool EmptyPlaceSensor { get; set; }
        public bool FullPlaceSensor { get; set; }

        Task StartTimer(long delay, long period, TimerCallback callback);

        Task KillTimer();
        void OnPlaceSensorChanged([CallerMemberName] string propertyName = "");
    }
}

