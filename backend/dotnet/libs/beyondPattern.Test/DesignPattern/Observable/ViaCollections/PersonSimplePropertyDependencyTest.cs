using Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections;

namespace Backend.Dotnet.Libs.Beyond.Pattern.Test.DesignPattern.Observable.ViaCollections
{
    public class PersonSimplePropertyDependencyTest
    {

        [Fact]

        public void PropertyDependencyIfCanVoteFalseTest()
        {
            var person = new PersonSimplePropertyDependency();

            person.PropertyChanged += (sender, eventArgs)=> {
                string? propertyName = eventArgs.PropertyName;

                Assert.Equal("Age", propertyName);
            
            };
            person.Age = 15;

            Assert.False(person.CanVote);
        }

        [Fact]
        public void PropertyDependencyIfCanVoteTrueTest()
        {
            var person = new PersonSimplePropertyDependency();
            
            var value = 16;
            
            Assert.PropertyChanged(person, "Age", ()=>  person.Age = value);
            

            Assert.True(person.CanVote);

            Assert.Equal(value, person.Age);
        }

        [Fact]
        public void PropertyDependencyIfCanVoteEventRaiseTest()
        {
            var person = new PersonSimplePropertyDependency();

            var value = 16;

            Assert.PropertyChanged(person, "CanVote", () => person.Age = value);


            Assert.True(person.CanVote);

            Assert.Equal(value, person.Age);
        }


    }
}
