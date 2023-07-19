﻿using Backend.Dotnet.Libs.SensorSem.Sensors;

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
    }
}
