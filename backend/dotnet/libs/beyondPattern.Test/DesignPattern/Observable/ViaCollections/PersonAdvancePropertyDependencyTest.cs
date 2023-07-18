using Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections;
using Moq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Dotnet.Libs.Beyond.Pattern.Test.DesignPattern.Observable.ViaCollections
{
    public class PersonAdvancePropertyDependencyTest
    {


        [Fact]
        public void PropertyDependencyIfCanVoteFalseTest()
        {
            var person = new PersonAdvancePropertyDependency();

            var value = 15;

            Assert.PropertyChanged(person, "Age", () => person.Age = value);

            Assert.False(person.CanVote);

            Assert.Equal(value, person.Age);

        }

        [Fact]
        public void PropertyDependencyIfCanVoteTrueTest()
        {
            var person = new PersonAdvancePropertyDependency();

            var value = 16;

            var citizen = true;

            Assert.PropertyChanged(person, "Age", () => { person.Age = value; person.Citizen = citizen; });

            Assert.True(person.CanVote);

            Assert.Equal(value, person.Age);

            Assert.True(person.Citizen);

        }

        [Fact]
        public void PropertyDependencyIfItRaisesCanVoteTest()
        {
            var person = new PersonAdvancePropertyDependency();

            var value = 16;

            const bool citizen = true;

            Assert.PropertyChanged(person, "CanVote", () => { person.Age = value; person.Citizen = citizen; });

            Assert.True(person.CanVote);

            Assert.Equal(value, person.Age);

            Assert.True(person.Citizen);

        }


        [Fact]
        public void PropertyDependencyIfsetFirstNaeme3CharacterAndReiseIsNotEmptyFirstNameTest()
        {
            var person = new PersonAdvancePropertyDependency();

            var value = "123";           

            Assert.PropertyChanged(person, "FirstName", () => { person.FirstName = value;});

            Assert.True(person.IsNotEmptyFirstName);

            Assert.Equal(value, person.FirstName);

        }

        [Fact]
        public void PropertyDependencyIfsetFirstNaeme3CharacterAndRaiseIsNotEmptyFirstNameTest()
        {
            var person = new PersonAdvancePropertyDependency();

            var value = "123";

            Assert.PropertyChanged(person, "IsNotEmptyFirstName", () => { person.FirstName = value; });

            Assert.True(person.IsNotEmptyFirstName);

            Assert.Equal(value, person.FirstName);

        }

        [Fact]
        public void PropertyDependencyIfsetLastNaeme3CharacterAndRaiseFirstNameTest()   
        {
            var person = new PersonAdvancePropertyDependency();

            var value = "TestingValue";

            Assert.PropertyChanged(person, "LastName", () => { person.LastName = value; });


            Assert.Equal(value, person.LastName);

        }

    }
}
