package cardcatalog.main.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
    public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

        @Autowired
        private UserDetailsServiceImpl userDetailsService;

        @Autowired
        protected void configureAuthentication(AuthenticationManagerBuilder auth) throws Exception {
            auth
                    .userDetailsService(userDetailsService)
                    .passwordEncoder(passwordEncoder());
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                    .cors()
                    .and()
                    .csrf()
                    .disable() // H2 Console
                    .authorizeRequests()
                    .antMatchers("/user/**").hasAnyRole("USER", "ADMIN")
                    .antMatchers("/users/register").permitAll()
                    .antMatchers("/user/**").hasAnyRole("USER", "ADMIN")
                    .antMatchers("/h2/**", "/**").permitAll()
                    .anyRequest()
                    .authenticated()
                    .and()
                    .logout().clearAuthentication(true)
                    .logoutUrl("/logout")
                    .logoutSuccessUrl("/").deleteCookies("JSESSIONID")
                    .invalidateHttpSession(true)
                    .permitAll()
                    .and()
                    .httpBasic()
                    .and()
                    .headers()
                    .frameOptions()
                    .disable(); // H2 Console
        }

        @Bean
        public BCryptPasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }
}