FROM golang:alpine AS builder
RUN apk update && apk add --no-cache git
WORKDIR $GOPATH/src/http-benchmark/
COPY . .
RUN go get -d -v
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o /go/bin/http-benchmark
FROM scratch
USER 10001
WORKDIR /app
COPY --from=builder /go/bin/http-benchmark /app/http-benchmark
EXPOSE 3000
ENTRYPOINT ["/app/http-benchmark"]