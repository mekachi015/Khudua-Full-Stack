package Khudua.Khudua.Backend.service;

import Khudua.Khudua.Backend.entitry.Query;
import Khudua.Khudua.Backend.repository.QueryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class QueryService {

    @Autowired
    private QueryRepository queryRepository;

    @Autowired
    private JavaMailSender emailSender;

    public void saveQuery(Query query){

        queryRepository.save(query);

        //sends mail to the admin - me in this case
        String emailContent = String.format("Name: %s %s\nPhone: %s\nEmail: %s\nQuery: %s",
        query.getName(), query.getLastname(),
                query.getCellNumber(), query.getEmail(),
                query.getQuery());

        //

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("katlegomakoti@gmail.com");
        message.setSubject("New customer query");
        message.setText(emailContent);
        emailSender.send(message);

        // Send confirmation email to user
        String confirmationMessage = "Thank you for your query. We will get back to you soon.";
        SimpleMailMessage confirmationEmail = new SimpleMailMessage();
        confirmationEmail.setTo(query.getEmail());
        confirmationEmail.setSubject("Query Received");
        confirmationEmail.setText(confirmationMessage);
        emailSender.send(confirmationEmail);

    }


}
