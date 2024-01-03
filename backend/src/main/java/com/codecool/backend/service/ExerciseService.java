package com.codecool.backend.service;

import com.codecool.backend.controller.dto.FilterDTO;
import com.codecool.backend.dao.ExerciseDAO;
import com.codecool.backend.dao.model.Exercise;
import com.codecool.backend.repository.ExerciseRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.provider.HibernateUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {

    private final ExerciseDAO activityDAO;
    private final ExerciseRepository exerciseRepository;
    private final EntityManagerFactory emf;
    @Value("${connectionstring}")
    private String url;
    @Value("${dbpassword}")
    private String dbPassword;
    @Value("${dbusername}")
    private String dbUsername;

    public ExerciseService(ExerciseDAO activityDAO, ExerciseRepository exerciseRepository, EntityManager em) {
        this.activityDAO = activityDAO;
        this.exerciseRepository = exerciseRepository;
        this.emf = Persistence.createEntityManagerFactory(
                url + ";" + "user=" + dbUsername + ";" + "password=" + dbPassword
        );
    }

    public List<Exercise> getActivities() {
        return activityDAO.getExercises();
    }
    public List<Exercise> getFilteredExercises(FilterDTO filterDTO) {
//        EntityManager em = emf.createEntityManager();
//        CriteriaBuilder cb = em.getCriteriaBuilder();
//        CriteriaQuery<Exercise> query = cb.createQuery(Exercise.class);
//        Root<Exercise> c = query.from(Exercise.class);

        try (Session session = HibernateUtils) {

        } catch(Exception e) {
            System.out.println("asd");
        }
        Session session = HibernateUtils.getHibernateSession();
    }
}
