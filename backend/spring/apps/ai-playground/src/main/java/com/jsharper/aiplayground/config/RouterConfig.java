package main.java.com.jsharper.aiplayground.config;


/* import java.util.function.BiFunction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.jsharper.basics.webflux.exceptions.InputFailedValidationResponse;
import com.jsharper.basics.webflux.exceptions.InputValidationException; */

import reactor.core.publisher.Mono;

//@Configuration
public class RouterConfig {

  /*  @Autowired
	private RequestHandler requestHandler;

    @Bean
	public RouterFunction<ServerResponse> baseLevelRouter() {
		return RouterFunctions.route().path("fn-router", this::serverResponseRouterfn).build();
	}

	private RouterFunction<ServerResponse> serverResponseRouterfn() {

		return RouterFunctions.route().GET("{a}/{b}", isOperation("+"), calculatorHandler::additionHandler)
				.GET("{a}/{b}", isOperation("-"), calculatorHandler::substractionHandler)
				.GET("{a}/{b}", isOperation("/"), calculatorHandler::divisionHandler)
				.GET("{a}/{b}", isOperation("*"), calculatorHandler::multiplicationHandler)
				.GET("{a}/{b}", req -> ServerResponse.badRequest().bodyValue("OP should be + - * /"))

				.build();
	} 
    */ 
}
