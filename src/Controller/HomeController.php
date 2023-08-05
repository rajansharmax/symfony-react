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
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;


class HomeController extends AbstractController
{

   

    #[Route('/home', name: 'home')]
    public function home(EntityManagerInterface $manager, UserPasswordHasherInterface $passwordHasher): Response
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

    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        // return $this->redirectToRoute('login');
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }

    #[Route('/login', name: 'login')]
    public function login(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }

    #[Route('/register', name: 'register')]
    public function register(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }


    #[Route('/register/user', name: 'api_register_user', methods: ['POST'])]
    public function registerUser(Request $request, EntityManagerInterface $manager, UserPasswordHasherInterface $passwordHasher): Response
    {
        try {
            // Get the data from the request
            $data = json_decode($request->getContent(), true);
            // Validate the data (e.g., check if required fields are present, validate email, etc.)
            // ... (you can add your validation logic here)
            // ... (you can add your validation logic here)
            if (empty($data['username']) || empty($data['email']) || empty($data['password'])) {
                return new JsonResponse(['error' => 'Missing required fields'], 400);
            }

            if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                return new JsonResponse(['error' => 'Invalid email address'], 400);
            }

            // Check if the user with the provided email already exists
            $existingUserEmail = $manager->getRepository(User::class)->findOneBy(['email' => $data['email']]);
            $existingUserUsername = $manager->getRepository(User::class)->findOneBy(['username' => $data['username']]);
            // dd($existingUserUsername);
            if ($existingUserEmail) {
                return new JsonResponse(['error' => 'User with this email already exists'], 409); // HTTP status code 409: Conflict
            }else if ($existingUserUsername){
                return new JsonResponse(['error' => 'User with this username already exists'], 409); // HTTP status code 409: Conflict
            }

            $user = new User();
            $user->setUsername($data['username']);
            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $data['password']
            );
            $user->setEmail($data['email']);
            $user->setPassword($hashedPassword);
            // $user->setRoles([User::ROLE_ADMIN]);

            $user->setFullName(' ');
            $user->setCreatedAt(new \DateTimeImmutable());

            $manager->persist($user);
            $manager->flush();

            // Perform the registration logic (e.g., storing the user in the database)
            // ... (you can add your registration logic here)

            // Return a success response
            return new JsonResponse(['message' => 'Registration successful'], 200);
        } catch (\Exception $e) {
            // If any error occurs during the registration process, return an error response
            return new JsonResponse(['error' => $e->getMessage()], 500);
        }
    }

    #[Route('/products', name: 'products')]
    public function products(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }

    #[Route('superadmin/login', name: 'adminLogin')]
    public function AdminLogin(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }

    #[Route('superadmin/wrong_role_page', name: 'wrong_role_page')]
    public function WrongRole(Request $request){
        try{
            dd('ee');
        }catch(Exception $e){
            dd($e->getMessage());
        }finally{
            dd('works');
        }
    }
}
