PGDMP     *    .    
            x            Medical_Biology_Journal    12.1    12.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    57429    Medical_Biology_Journal    DATABASE     �   CREATE DATABASE "Medical_Biology_Journal" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_Algeria.1252' LC_CTYPE = 'French_Algeria.1252';
 )   DROP DATABASE "Medical_Biology_Journal";
                postgres    false            �            1259    57432    users    TABLE       CREATE TABLE public.users (
    user_id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    title character varying(20),
    first_name text,
    last_name text,
    degree character varying(20),
    phone text,
    "position" text,
    institution text,
    departement text,
    address_institution text,
    city text,
    state_provaince text,
    postal_code character varying(20),
    country character varying(20),
    reviewer boolean,
    resetpasswordlink text,
    fields text[]
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    57430    normal_user_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.normal_user_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.normal_user_user_id_seq;
       public          postgres    false    203            	           0    0    normal_user_user_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.normal_user_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    202            �
           2604    57435    users user_id    DEFAULT     t   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.normal_user_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    203    202    203                      0    57432    users 
   TABLE DATA           �   COPY public.users (user_id, email, password, title, first_name, last_name, degree, phone, "position", institution, departement, address_institution, city, state_provaince, postal_code, country, reviewer, resetpasswordlink, fields) FROM stdin;
    public          postgres    false    203   T       
           0    0    normal_user_user_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.normal_user_user_id_seq', 21, true);
          public          postgres    false    202            �
           2606    57440    users normal_user_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.users
    ADD CONSTRAINT normal_user_pkey PRIMARY KEY (user_id);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT normal_user_pkey;
       public            postgres    false    203               �   x�32��H���/���H�K�K-I�qH�M���K���T1JR14P��(�w,�+	L*H2M3���HMvO+M	v�
�2	I-tN�J)�6�s��̍���t)℘	��3��2�s�<r�IO-�L�,��b���� �1�     