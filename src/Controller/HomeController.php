<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;



class HomeController extends AbstractController
{

   

    #[Route('/add-demo-user', name: 'add_demo_user')]
    public function add_demo_user(EntityManagerInterface $manager, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = new User();
        $user->setUsername('admin2');
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            12345678
        );
        $user->setPassword($hashedPassword);

        $user->setFullName('Admin');
        $user->setCreatedAt(new \DateTimeImmutable());

        $manager->persist($user);
        $manager->flush();

        return $this->render('Good');
    }

    #[Route('/',name:'app_home')]
    public function home(): Response
    {
       return $this->HomePage();
    }

    #[Route('/login', name: 'login')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }

    #[Route('/products', name: 'products')]
    public function products(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }

    public function HomePage(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }
}
