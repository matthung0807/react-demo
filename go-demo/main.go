package main

import (
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true // allow CORS request's Origin header
	},
}

func main() {
	http.HandleFunc("/echo", ehcoHandler)
	http.ListenAndServe(":8080", nil)
}

func ehcoHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil) // get a websocket connettion
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	message := "show me the money"
	err = conn.WriteMessage(websocket.TextMessage, []byte(message)) // write a message to client
	if err != nil {
		panic(err)
	}

}
