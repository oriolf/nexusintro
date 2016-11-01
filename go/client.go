package main

import (
	"fmt"
	"github.com/nayarsystems/nxgo"
	"time"
)

func main() {
	conn, _ := nxgo.Dial("tcp://localhost:1717", nil)
	conn.Login("root", "root")
	fmt.Println(conn.TaskPush("demo.hello", nil, 1*time.Hour))
}
