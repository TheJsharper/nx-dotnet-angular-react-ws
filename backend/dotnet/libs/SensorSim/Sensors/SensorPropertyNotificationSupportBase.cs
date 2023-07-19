using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Backend.Dotnet.Libs.SensorSem.Sensors
{
    public class SensorPropertyNotificationSupportBase:INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler? PropertyChanged;

        public void OnPlaceSensorChanged([CallerMemberName] string propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));

        }
    }
}
