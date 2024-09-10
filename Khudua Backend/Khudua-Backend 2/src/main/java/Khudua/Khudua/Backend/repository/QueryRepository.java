package Khudua.Khudua.Backend.repository;

import Khudua.Khudua.Backend.entitry.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QueryRepository  extends JpaRepository <Query, Long> {

}
