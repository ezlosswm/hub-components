package main

import "fmt"

func main() {

    stream := `
        This is more thank likely going to be limited to a certain amount of characters I’m thinking maybe 120 characters. Need count it in development.j;sdklfja fjf lkfkljfkljj jlkasd;lksd jf
    `

    fmt.Println(len([]byte(stream)))
}
