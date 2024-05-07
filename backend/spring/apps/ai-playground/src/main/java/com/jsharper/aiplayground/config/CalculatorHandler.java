package com.jsharper.aiplayground.config;

import java.util.function.BiFunction;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.jsharper.aiplayground.models.RequestDto;

import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;
import org.springframework.http.MediaType;
import java.time.Duration;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class CalculatorHandler {

    public Mono<ServerResponse> additionHandler(ServerRequest req) {
        return process(req, (a, b) -> ServerResponse.ok().bodyValue(a + b));
    }

    public Mono<ServerResponse> substractionHandler(ServerRequest req) {
        return process(req, (a, b) -> ServerResponse.ok().bodyValue(a - b));
    }

    public Mono<ServerResponse> multiplicationHandler(ServerRequest req) {
        return process(req, (a, b) -> ServerResponse.ok().bodyValue(a * b));
    }

    public Mono<ServerResponse> divisionHandler(ServerRequest req) {
        return process(req, (a, b) -> {
            return b != 0 ? ServerResponse.ok().bodyValue(a / b)
                    : ServerResponse.badRequest().bodyValue("b can NOT be 0");
        });
    }

    public Mono<ServerResponse> getList(ServerRequest req) {
        var payload = Flux.just("First", "Secound", "Third").delayElements(Duration.ofSeconds(3));
        return ServerResponse.ok().contentType(MediaType.TEXT_EVENT_STREAM)
                .body(payload, String.class);
    }

    public Mono<ServerResponse> post(ServerRequest rep){
     Mono<RequestDto> reqToDto =  rep.bodyToMono(RequestDto.class);
     WebClient webClient =WebClient.builder().baseUrl("http://localhost:11434").build();
     webClient.get().uri("/api/chat");
   // reqToDto.map((requestDto)-> requestDto.)
    }

    private Mono<ServerResponse> process(ServerRequest req,
            BiFunction<Integer, Integer, Mono<ServerResponse>> opLogic) {

        int a = getValue(req, "a");
        int b = getValue(req, "b");

        return opLogic.apply(a, b);
    }

    private int getValue(ServerRequest req, String key) {
        return Integer.parseInt(req.pathVariable(key));
    }
}
