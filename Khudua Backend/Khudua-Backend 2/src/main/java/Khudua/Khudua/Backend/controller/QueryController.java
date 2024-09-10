package Khudua.Khudua.Backend.controller;

import Khudua.Khudua.Backend.entitry.Query;
import Khudua.Khudua.Backend.service.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/enquires")
public class QueryController {

    @Autowired
    private QueryService queryService;

    @PostMapping
    public void submitQuery(@RequestBody Query query){
        queryService.saveQuery(query);
    }
}
