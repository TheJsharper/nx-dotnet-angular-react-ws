﻿using Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Dotnet.Libs.Beyond.Pattern.Test.DesignPattern.Observable.ViaCollections
{
    public class MarketSimpleByNotifyPropertyChangedTest
    {


        [Fact]
        public void ValitilityTest()

        {
            var market = new MarketSimpleByNotifyPropertyChanged();
            market.PropertyChanged += Market_PropertyChanged;
            var value = 123.01f;
            market.Valitility = value;
            Assert.Equal(value, market.Valitility);
        }

        private void Market_PropertyChanged(object? sender, PropertyChangedEventArgs e)
        {
           if(e.PropertyName == "Valitility")
            {
                Console.WriteLine($"Called  Valitility {e.ToString()}");
            } 
        }

      
    }
}
