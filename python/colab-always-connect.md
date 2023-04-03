---
title: 
date: 2023-03-16 17:39
tags: ['tag']
---

## Prevent a Google Colab Disconnection

### Javascript

- <kbd>Ctrl</kbd>+ <kbd>Shift</kbd> + <kbd>i</kbd> to open inspector view, then go to console.

Alternative 1

```
function ClickConnect(){  
console.log("Working");   
document.querySelector("colab-toolbar-button#connect").click()   
}
setInterval(ClickConnect,60000)
```

Alternative 2

```
function ClickConnect(){  
console.log("Working");   
document.querySelector("colab-toolbar-button").click()   
}
setInterval(ClickConnect,60000)
```

Alternative 3

```
function ClickConnect(){
var reconnect = document.querySelector(“colab-toolbar-button#connect”)
if(reconnect != null){
console.log(“working”)
reconnect.click()
}
}
const tensorInterval = setInterval(ClickConnect,60000)
```

Then to stop clicking paste this

```
clearInterval(tensorInterval)
```

Alternative 4

```
function ClickConnect(){  
{  
console.log(“Working”);  
document.querySelector(“colab-connect-button”).shadowRoot.getElementById(‘connect’).click();  
}  
setInterval(ClickConnect,60000)
```

Alternative 5

```
function ClickConnect(){
    console.log("Clicked on connect button"); 
    document.querySelector("colab-connect-button").click()
}
setInterval(ClickConnect,60000)
```

Alternative 6 (not working)

```
function ClickConnect(){
    console.log("Clicked on connect button"); 
    document.querySelector("#ok").click()
}
setInterval(ClickConnect,60000)
```

Alternative 7

```javascript
function ConnectButton(){
    console.log("Connect pushed"); 
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click() 
}
setInterval(ConnectButton,60000);
```

### Python

```python
import time
from pynput.mouse import Controller ,Button

MouseClick = Controller()

while True:

    MouseClick.click(Button.left, 1)
    time.sleep(20)
```

### AHK

Alternative 1

```

KeepAlive(ColabWinTitle, Interval){
	Loop
	{
		Sleep, 1000 * 3
		if WinExist(ColabWinTitle)
		{
			WinActivate  ; Automatically uses the window found above.
			WinMaximize  ; same
			Sleep, 2000
			MouseClick, left, 1750, 250, 1, 30
			Send, {WheelDown 10}
			Send, {WheelDown 20}
			send, {PgDn 2}
			MouseClick, left, 1750, 500, 1, 30
			send, {PgUp 4}
			send, {PgDn 8}
		}
		else{
			MsgBox, , Halt : No Such Window , Did not find Window : %ColabWinTitle%
			Return	
		}
		Sleep, Interval
	}
}
	

InputBox, ColabFileName, Colab Keep Alive Script, Enter the Google Colab filename
ColabWinTitle := ColabFileName . " - Colaboratory"
if WinExist(ColabWinTitle){
	WinActivate
	InputBox, Interval, Keep Alive : %ColabWinTitle%, Enter an interval (in minutes) to emulate mouse and keyboard behaviour :
	if Interval is not integer
	{
		MsgBox, , Halt : Bad Type, Enter an Integer for the Interval
		Return
	}
	else{
		MsgBox, , Interval Set, interval set for %Interval% minutes.
		Interval := 1000 * 60 * Interval
		KeepAlive(ColabWinTitle , Interval)
	}
}
else{
	MsgBox, , Halt : No Such Window, Did not find Window : %ColabWinTitle%
	Return
}
```

Alternative 2

```
;to start the script (ctrl+shift+F11)
^+f11::settimer, main_script, 600000

;to pause the script (ctrl+shift+F12)
^+f12::settimer, main_script, off




main_script()
{
	param_window_title := "IPYNB-File-Name.ipynb"
	param_window_title := param_window_title . " - Colaboratory"
	param_window_title := param_window_title . " - Mozilla Firefox"
	param_window_title := param_window_title . " - Colaboratory - Google Chrome"
	
	param_mouse_speed := 50
	
	
	if winexist(param_window_title)
	{
		winactivate
		winmaximize
		
		initial_message_box_sleep_time := 4
		MsgBoxTimed("Runtime ahk routine activated", "Everything is ok, closing windows in:", initial_message_box_sleep_time)
		sleep_for(0,0,initial_message_box_sleep_time+1)
		
		screen_width = %A_ScreenWidth%
		screen_height = %A_ScreenHeight%
		
		perform_actions(screen_width/2, screen_height/2, param_mouse_speed)
	}
}


sleep_for(t_hours, t_minutes, t_seconds)
{
	sleep_time := (t_hours * 3600) + (t_minutes * 60) + t_seconds
	sleep_time := sleep_time * 1000
	
	sleep sleep_time
}

dl()
{
	sleep_for(0,0,0.5)
}

MsgBoxTimed(title, msg, seconds, complete="") {
    static init = false, _seconds, _complete
    global Msg92, Seconds92
    if (!init)
    {
        init := true
        Gui, 92:Font, s24
        Gui, 92:Add, Text, vMsg92 Center w360, %msg%
        Gui, 92:Font, s30 cRed
        Gui, 92:Add, Text, vSeconds92 Center w360, %seconds%
    }

    _seconds := seconds
    _complete := complete

    GuiControl, 92:, Msg92, %msg%
    Gui, 92:Show, w400 h250, %title%

    Update92:
    GuiControl, 92:, Seconds92, %_seconds%
    _seconds -= 1
    if (_seconds > 0) {
        SetTimer, Update92, -1000
    }
    else {
        Gui, 92:Hide
        if (_complete)
            SetTimer, %_complete%, -1
    }
    return
} 

perform_actions(x, y, param_mouse_speed)
{
	mouseclick left, x, y, 1, param_mouse_speed
	dl()
	send, {WheelUp 15}
	dl()
	send, {WheelDown 15}
	dl()
	mouseclick left, x+15, y, 1, param_mouse_speed
	dl()
	send {pgup 2}
	dl()
	send {pgdn 10}
	dl()
	mouseclick left, x-15, y, 1, param_mouse_speed
	dl()
}





```

## References

- [python - How can I prevent Google Colab from disconnecting? - Stack Overflow](https://stackoverflow.com/questions/57113226/how-can-i-prevent-google-colab-from-disconnecting)
- [Google Colab session timeout - Stack Overflow](https://stackoverflow.com/questions/54057011/google-colab-session-timeout)