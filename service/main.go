package main

import (
	"fmt"
	"github.com/nayarsystems/nxgo"
	"time"
)

func main() {
	conn, err := nxgo.Dial("tcp://localhost:1717", nil)
	if err != nil {
		return
	}

	_, err = conn.Login("root", "root")
	if err != nil {
		return
	}

	for {
		task, err := conn.TaskPull("demo", 1*time.Hour)
		if err != nil {
			return
		}

		if task.Method != "hello" {
			fmt.Println("Method not found")
			task.SendError(-32601, "Method not found", nil)
		} else {
			fmt.Println("Hello, world!")
			task.SendResult("Hello, world!")
		}
	}
}
