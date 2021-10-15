# ext-static-availability-stockinfo-text

This extension overwrites the availability text or the stock info text on the PDP.

# Configuration

  * `text`: Static text to be displayed 
  * `styles`: Styling with CSS
  * `show`: Show or hide component

# Default value
```
{
  "staticStockInfoText": {
    "text": "",
    "styles": {},
    "show": false
  },
  "staticAvailabilityText": {
    "text": "",
    "styles": {},
    "show": false
  }
}
```
# Example
```
{
  "staticStockInfoText": {
    "show": false,
    "text": "",
    "styles": {}
  },
  "staticAvailabilityText": {
    "show": true,
    "text": "Ready to ship immediately",
    "styles": {
      "color": "#35cc29",
      "fontSize": "14px"
    }
  }
}
```
