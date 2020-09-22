<a name="dataURI"></a>

### dataURI(value) ⇒ <code>Boolean</code>
Test if `value` is a data uri format.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if `value` is a data uri format, false otherwise  
**Throws**:

- <code>TypeError</code> if `value` is not a `string`

**Access**: public  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | `value` to test |

**Example**  
```js
is.dataURI("data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D"); // => True
is.dataURI("data:,A%20brief%20invalid%20[note"); // => False
```

* * *

