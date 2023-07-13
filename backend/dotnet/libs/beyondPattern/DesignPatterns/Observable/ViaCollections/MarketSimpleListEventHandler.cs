namespace Backend.Dotnet.Libs.Beyond.Pattern.DesignPatterns.Observable.ViaCollections
{
    public class MarketSimpleListEventHandler
    {
        private List<float> prices = new List<float>();

        public MarketSimpleListEventHandler()
        {
            prices = new List<float>();
        }

        public List<float> Prices { get { return prices; } }

        public event EventHandler<float>? PriceAdded;

        public void AddPrice(float price)
        {
            prices.Add(price);
            PriceAdded?.Invoke(this, price);
        }


    }
}
