package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/messages", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		w.Header().Set("Access-Control-Allow-Origin", "*")

		messages := []string{
			"How are you?",
			"I'm fine, thank you.",
		}

		data, _ := json.Marshal(messages)
		fmt.Fprint(w, string(data)) // write out content
	})

	http.ListenAndServe(":8080", nil)
}
