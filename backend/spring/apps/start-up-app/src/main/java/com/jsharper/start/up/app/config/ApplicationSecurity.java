package com.jsharper.start.up.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class ApplicationSecurity {

	
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http)throws Exception {
		http.authorizeHttpRequests((requests)->{ 
			
			requests.requestMatchers("/swagger-ui").permitAll();
			requests.requestMatchers("/users/").authenticated();
				
		});
		http.formLogin(Customizer.withDefaults());
		http.httpBasic(Customizer.withDefaults());
		return http.build();
	}
}
