import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    totalSavings,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-foreground/50 z-50 animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="font-bold text-lg">Jūsu Grozs ({totalItems})</h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-muted rounded-md transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-lg font-medium mb-2">Jūsu grozs ir tukšs</p>
              <p className="text-muted-foreground mb-6">
                Sāciet iepirkties, lai to piepildītu!
              </p>
              <Button onClick={closeCart}>Turpināt Iepirkšanos</Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="flex gap-4 p-3 bg-muted/30 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-28 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-muted-foreground">
                      {item.brand}
                    </p>
                    <h3 className="font-medium truncate">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Izmērs: {item.selectedSize} | {item.selectedColor}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="price-original">
                        €{item.originalPrice.toFixed(2)}
                      </span>
                      <span className="price-sale">
                        €{item.salePrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity - 1
                            )
                          }
                          className="p-1 hover:bg-muted rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity + 1
                            )
                          }
                          className="p-1 hover:bg-muted rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          removeItem(
                            item.id,
                            item.selectedSize,
                            item.selectedColor
                          )
                        }
                        className="p-2 text-muted-foreground hover:text-sale transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            {totalSavings > 0 && (
              <div className="bg-success/10 text-success px-4 py-2 rounded-md text-sm font-medium text-center">
                🎉 Jūs ietaupāt €{totalSavings.toFixed(2)}!
              </div>
            )}
            <div className="flex justify-between text-lg font-bold">
              <span>Starpsumma</span>
              <span>€{totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Piegādes izmaksas tiek aprēķinātas pie apmaksas
            </p>
            <Button variant="sale" size="xl" className="w-full">
              Noformēt Pasūtījumu
            </Button>
            <Button variant="outline" className="w-full" onClick={closeCart}>
              Turpināt Iepirkšanos
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;