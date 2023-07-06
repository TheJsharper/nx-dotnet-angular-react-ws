namespace beyondPattern.DesignPatterns.Observable.ViaWeakEvent
{
    public class Button
    {
        public event EventHandler ?Clicked;

        public void Fire(){
            Clicked?.Invoke(this, EventArgs.Empty);
        }
    }

    public class Window
    {
        public Window(Button button)
        {
            
                button.Clicked += Button_Clicked;
          

        }

        private void Button_Clicked(object? sender, EventArgs e)
        {
            Console.WriteLine("Button clicked (Window handler)");
        }

        ~Window() 
        {
            Console.WriteLine("Window finalized");
        }
    }
}